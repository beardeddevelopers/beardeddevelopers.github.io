export default function AlmostBearded({ id, name, avatar, image }) {
  // show the beard!
  const popupBeard = (imageUrl) => {
    document.getElementById("lightA").innerHTML = "<img border=0 alt='' src='" + imageUrl + "' />";
    document.getElementById("light").style.display = "block";
    document.getElementById("fade").style.display = "block";
    return false;
  };
  return (
    <>
      <div>
        <a href="#" onClick={() => popupBeard(image)}>
          <img border="0" alt="" src={avatar} />
        </a>
        It's close-bearded developer #{id}. ({name})
      </div>
      <br />
    </>
  );
}
