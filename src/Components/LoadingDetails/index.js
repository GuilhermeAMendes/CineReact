import "./style.css";

function LoadingDetails() {
  return (
    <div className="loading">
      <h2> </h2>
      <div className="skeletonCard">
        <article>
          <div className="skeletonPoster"></div>
          <div className="skeletonDetails">
            <strong className="skeletonTitle"></strong>
          </div>
        </article>
      </div>
    </div>
  );
}

export default LoadingDetails;
