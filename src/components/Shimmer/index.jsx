import "./index.css";
import { Skeleton } from "@mui/material";
const Shimmer = () => {
  return (
    <div className="page-shimmer m-2 pb-4">
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton
        variant="text"
        width={210}
        height={60}
        sx={{ fontSize: "1rem" }}
      />
      <Skeleton variant="rectangular" width={210} height={60} />
    </div>
  );
};
export default Shimmer;
