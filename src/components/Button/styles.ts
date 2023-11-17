import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  background-color: var(--gray-900);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  padding: 8px 16px;
  position: relative;
  width: fit-content;

  cursor: pointer;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none;

  &:hover {
    background-color: var(--gray-800);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

export const Text = styled.div`
  color: var(--gray-50);
  font-family: "Noto Sans Georgian", Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 19.6px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
`;
