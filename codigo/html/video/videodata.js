const loadVideo = (course, categoria, video) => {
  const courseJson = localStorage.getItem("@courses");

  const courseParsed = JSON.parse(courseJson);

  if (
    courseParsed[course] &&
    courseParsed[course].playlist[categoria] &&
    courseParsed[course].playlist[categoria].videos[video]
  ) {
    const videoData = courseParsed[course].playlist[categoria].videos[video];
    console.log(videoData);

    document.querySelector(".video__titulo").innerHTML = videoData.title;
    document.querySelector("a#ref-back").href = `../cursos/?id=${course}`;

    let courseUpdate = courseParsed;
    courseUpdate[course].playlist[categoria].videos[video].watched = true;

    document.querySelector("iframe").src =
      courseUpdate[course].playlist[categoria].videos[video].url;

    localStorage.setItem("@courses", JSON.stringify(courseUpdate));
  } else {
    alert("Nao foi possivel encontrar esse video!");
  }
};
