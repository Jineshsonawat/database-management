import { useNavigate } from "react-router-dom";

function DefaultPage() {
  const navigate = useNavigate();

  return navigate("/login");
}

export { DefaultPage };
