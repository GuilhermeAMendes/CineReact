import Loading from "../../Components/Loading";
import Card from "../../Components/Card";
import "./style.css";
import useFetchNowPlaying from "../../hooks/useFetchNowPlaying";

function Home() {
  const { movies, isloading } = useFetchNowPlaying();

  if (isloading) {
    const loadingComponents = Array.from({ length: 20 }, (_, index) => (
      <Loading key={index} />
    ));
    return <>{loadingComponents}</>;
  }

  return (
    <div className="container">
      <Card item={movies} />
    </div>
  );
}

export default Home;
