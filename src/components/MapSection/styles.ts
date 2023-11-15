import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Wrapper = styled.div<{ $isMob: boolean }>`
  left: 0;
  padding: ${({ $isMob }) => ($isMob ? "48px 24px" : "120px 96px")};
  width: ${({ $isMob }) => ($isMob ? "390px" : "100%")};
  height: ${({ $isMob }) => ($isMob ? "800px" : "950px")};

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  background-color: #f1f5f9;
`;

export const Title = styled.h1<{ $isMob: boolean }>`
  color: var(--gray-800);
  font-family: "Noto Sans Georgian", Helvetica;
  font-size: ${({ $isMob }) => ($isMob ? "24px" : "32px")};
  font-weight: 600;
  letter-spacing: 0;
  line-height: ${({ $isMob }) => ($isMob ? "33.6px" : "44.8px")};
  position: relative;
  white-space: nowrap;
  width: ${({ $isMob }) => ($isMob ? "100%;" : "fit-content")};
`;

export const Subtitle = styled.h3<{ $isMob: boolean }>`
  color: var(--gray-800);
  flex: 1;
  font-family: "Noto Sans Georgian", Helvetica;
  font-size: ${({ $isMob }) => ($isMob ? "14px" : "16px")};
  font-weight: 400;
  letter-spacing: 0;
  line-height: 22.4px;

  margin-top: 16px;
  margin-bottom: 32px;
  position: relative;
`;

export const MapContainer = styled.iframe<{
  $isMob: boolean;
  $isLoading: boolean;
}>`
  border: 4px;
  border-width: 4px;
  border-radius: 16px;
  border-color: var(--gray-800);
  width: 100%;
  height: 90%;

  display: ${({ $isLoading }) => ($isLoading ? "none" : "block")};
`;

export const Spinner = styled.div`
  border: 4px solid rgba(19, 111, 136, 0.1);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border-left-color: rgba(19, 111, 136, 1);
  animation: ${spin} 1s linear infinite;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-self: center;
  height: 90%;
  padding-top: 96px;
`;
