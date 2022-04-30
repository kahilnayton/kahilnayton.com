import React from 'react';
import Layout from '../layouts/Layout';
import styled from 'styled-components';

export default function Videos() {
  return (
    <Layout>
      <ResponsiveContainer>
        <Iframe
          src="https://www.youtube.com/embed/9EQHdkZib8g?controls=0"
          title="iframe"
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
      </ResponsiveContainer>
    </Layout>
  );
}

const ResponsiveContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  margin-top: 4rem;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;
