export default function Bearded({ id, name, avatar, image, isBeardedDev }) {
  return (
    <>
      {isBeardedDev ? (
        <div>
          <a className="beard" data-beard={image} href="#">
            <img border="0" alt="" src={avatar} />
          </a>
          {"Yup, it's bearded developer #" + id + ". (" + name + ")"}
        </div>
      ) : (
        <div>
          <a className="beard" data-beard={image} href="#">
            <img border="0" alt="" src={avatar} />
          </a>
          {"It's close-bearded developer #" + id + ". (" + name + ")"}
        </div>
      )}
      <br />
    </>
  );
}
