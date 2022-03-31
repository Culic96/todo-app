import styled from "styled-components";

export const HelloContainer = styled.div(
  {
    color: "red",
  },
  ({ color }) => ({
    // Conditional style
    ...(color && {
      color: color,
    }),
  })
);
