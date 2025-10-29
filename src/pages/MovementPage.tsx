import { useParams, Navigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const MovementPage = () => {
  const { movementId, tonalityId } = useParams<{
    movementId: string;
    tonalityId: string;
  }>();

  const movement = parseInt(movementId || "1");
  const tonality = parseInt(tonalityId || "1");

  // Validate movement and tonality ranges
  if (
    isNaN(movement) ||
    isNaN(tonality) ||
    movement < 1 ||
    movement > 20 ||
    tonality < 1 ||
    tonality > 12
  ) {
    return <Navigate to="/movimento/1/tonalidade/1" replace />;
  }

  return <PageLayout movementId={movement} tonalityId={tonality} />;
};

export default MovementPage;
