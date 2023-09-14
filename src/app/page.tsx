"use client";

import { styled } from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.grayscale[20]};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 24px;
`;

const Section = styled.section`
  display: flex;
  text-align: center;
  justify-content: space-around;

  a {
    border: px solid #ccc;
    border-radius: 8px;
    color: ${({ theme }) => theme.color.grayscale[100]};
    padding: 24px;

    &:hover {
      background-color: ${({ theme }) => theme.color.grayscale[30]};
    }
  }

  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.color.grayscale[100]};
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.2rem;
  }

  & + & {
    margin-top: 10rem;
  }
`;

export default function Home() {
  return (
    <Container>
      <Section>
        <h1>
          Q<span>uantit.</span>
          UI
        </h1>
      </Section>

      <Section>
        <a
          href="https://pub.dev/packages/qui_flutter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            QUI Flutter <span>-&gt;</span>
          </h2>
          <p>Quantit standart UI system for Flutter.</p>
        </a>

        <a
          href="https://www.npmjs.com/package/@quantit/qui-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            QUI React <span>-&gt;</span>
          </h2>
          <p>Quantit standart UI system for React.</p>
        </a>
      </Section>
    </Container>
  );
}
