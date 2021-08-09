export default function Bearded({ id, name, avatar, image, isBeardedDev }) {
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
        {isBeardedDev ? (
          <span>
            Yup, it's bearded developer #{id}. ({name})
          </span>
        ) : (
          <span>
            It's close-bearded developer #{id}. ({name})
          </span>
        )}
      </div>
      <br />
    </>
  );
}
