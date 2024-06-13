import React, { ReactNode, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { StyledLayout } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isMob, setIsMob] = useState(false);

  useEffect(() => {
    if (window.screen.width < 768) {
      setIsMob(true);
    }
  }, []);

  return (
    <StyledLayout>
      <Header isMob={isMob} className={undefined} />

      <div className="content">{children}</div>

      <Footer isMob={isMob} />
    </StyledLayout>
  );
};
