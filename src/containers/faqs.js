import React from "react";
import styled from "styled-components";
import { Accordion } from "../components";
import { OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";

const Container = styled.div`
  border-bottom: 8px solid #222;
  padding-bottom: 45px;
`;

export function FaqsContainer() {
  return (
    <Container>
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <OptForm>
        <OptForm.Input placeholder="Email Addres..." />
        <OptForm.Button>Try it Now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to Watch? Enter your email to create or restart your membership
        </OptForm.Text>
      </OptForm>
    </Container>
  );
}
