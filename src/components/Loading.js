import ReactLoading from "react-loading";
  
export default function Loading() {
  return (
    <div className="loadingScreen">
      <ReactLoading type="spin" color="#0000FF"
        height={100} className="m-auto"/>
    </div>
  );
}
