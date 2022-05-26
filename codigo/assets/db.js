// @ts-check

/**
 * @template {unknown} T
 */
export class Database {
  /**
   * @param {string} collectionName
   */
  constructor(collectionName) {
    this.DATABASE_NS = "$codeflix";
    this.collectionName = collectionName;
    this.dbName = `${this.DATABASE_NS}_${this.collectionName}`;
  }

  /**
   * Returns the object with the associated key. Deserializes it from the database.
   *
   * Returns `null` if the associated entry does not exist in the database.
   *
   * @param {string} key
   * @return {T | null}
   */
  get(key) {
    return JSON.parse(this.storage().getItem(this.absKey(key)));
  }

  /**
   * Serializes the given value and inserts it into the database.
   *
   * @param {string} key
   * @param {T} val
   */
  set(key, val) {
    const serialized = this.serialize(val);
    this.storage().setItem(this.absKey(key), serialized);
  }

  /**
   * Serializes the given item and returns a string.
   *
   * @param {any} val
   * @return {string}
   */
  serialize(val) {
    return JSON.stringify(val);
  }

  /**
   * Same as `set`, but throws an error if an entry with the given `key` already exists.
   *
   * @param {string} key
   * @param {T} val
   */
  setSafe(key, val) {
    if (this.get(key)) {
      throw new Error(
        `Invalid call to 'setSafe'. An entry with the key '${key}' already exists in the database '${this.collectionName}'.`
      );
    }
    this.set(key, val);
  }

  /**
   * Returns the underlying storage.
   *
   * @return {any}
   */
  storage() {
    // @ts-ignore
    return window.localStorage;
  }

  /**
   * @param {string} key
   * @return {string}
   */
  absKey(key) {
    return `${this.dbName}_${key}`;
  }
}

/**
 * @template {{ id: ID }} T
 * @template {unknown} ID
 * @extends {Database<T[]>}
 */
export class ArrayDatabase extends Database {
  /**
   * @param {string} collectionName
   */
  constructor(collectionName) {
    super(collectionName);
    this.key = "$arr";

    this.ensureArray();
  }

  /**
   * Returns all the items from the database.
   *
   * @return {T[]}
   */
  getAll() {
    this.ensureArray();
    /** @type {any} - Assert needed here. But `ensureArray` ensures correct type at runtime. */
    const xs = this.get(this.key);
    return xs;
  }

  /**
   * Returns the item that matches the provided ID.
   *
   * @param {ID} id
   * @return { T | undefined}
   */
  getById(id) {
    const [selected, ...rest] = this.select((x) => x.id === id);
    if (rest.length > 0) {
      throw new Error(
        "Broken invariant. More than one entry with the same ID."
      );
    }
    return selected;
  }

  /**
   * Applies a predicate to the database and returns the filtered items.
   *
   * @param {(x: T) => boolean} pred
   * @return {T[]}
   */
  select(pred) {
    return this.getAll().filter(pred);
  }

  /**
   * Inserts the value with the given key into the database.
   * Throws an error if there is already an entry with the associated ID.
   *
   * @param {ID} id
   * @param {T} data
   */
  insert(id, data) {
    if (this.getById(id)) {
      throw new Error(
        `Invalid insert. ID '${id}' already exists on '${this.collectionName}'.`
      );
    }

    const all = this.getAll();
    all.push({ ...data, id });
    this.set(this.key, all);
  }

  /**
   * Updates the entry with the given ID (by overriding it).
   * Throws an error if the entry doesn't exist in the database.
   * If `patch` contains a new `id`, an error will be thrown.
   *
   * @param {ID} id
   * @param {Partial<T>} patch
   */
  edit(id, patch) {
    if ("id" in patch) {
      throw new Error("Can not update ID.");
    }
    const all = this.getAll();
    const ref = all.find((entry) => entry.id === id);
    if (!ref) {
      throw new Error("Can not edit non-existent entry.");
    }
    // We can mutate safely since the array was serialized by `getAll`'s underlying machinery.
    Object.assign(ref, patch);
    this.set(this.key, all);
  }

  /**
   * Removes the entry with the given ID.
   *
   * @param {ID} id
   */
  delete(id) {
    const all = this.getAll().filter((entry) => entry.id !== id);
    this.set(this.key, all);
  }

  /**
   * Throws an error if the associated entry in local storage doesn't contain a value of type array.
   */
  ensureArray() {
    // eslint-disable-next-line eqeqeq
    if (this.get(this.key) == null) {
      this.set(this.key, []);
    }
    if (!Array.isArray(this.get(this.key))) {
      throw new Error(
        `Invalid data format in database '${this.collectionName}'. Expected type array.`
      );
    }
  }
}
