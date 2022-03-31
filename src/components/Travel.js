export default function Travel(props) {
  return (
    <div className="wrapper">
      <div>
        <img className="location-img" src={props.imageUrl} />
      </div>
      <div className="info">
        <h3>
          {props.location}{" "}
          <a href={props.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </h3>
        <h1>{props.title}</h1>
        <h4>
          {props.startDate} - {props.endDate}
        </h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
