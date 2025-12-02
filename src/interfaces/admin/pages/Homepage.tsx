import { useEffect } from "react";
import { useNavigate, } from "react-router-dom";

export default function Homepage() {

  const navigate = useNavigate();
  useEffect(() => {

    navigate('departments', { replace: true });
  }, [])

  return (
    <>
      <h1>HomePage</h1>
    </>
  );
}
