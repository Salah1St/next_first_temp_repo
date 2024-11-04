import { ReactElement, FC } from "react";

import { useRouter } from "next/navigation";
import { getAccessToken } from "@/utils/localStroage";

interface ProtectedRouteProps {
  children: ReactElement;
}
const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const token = getAccessToken();

  if (token) {
    return children;
  } else {
    router.replace("/login");
    return null;
  }
};

export default ProtectedRoute;
