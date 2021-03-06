import React from 'react';
import ContentLoader, {List} from 'react-content-loader';
import Container from '@material-ui/core/Container';

import './contentLoader.scss';

export const BodyContentLoader = () => (
  <div className="bodyContentLoader">
    <ContentLoader
      height={200}
      width={400}
      speed={1}
      backgroundColor='#f3f3f3'
      foregroundColor='#d7d6d8'
    >
      <rect x='160.5' y='11' rx='4' ry='4' width='76.63' height='15.1' />
      <rect x='60.5' y='35.05' rx='1' ry='1' width='275.4' height='151.36' />
    </ContentLoader>
  </div>
);

export const HeaderContentLoader = () => (
  <ContentLoader
    height={95}
    width={2500}
    speed={1}
    backgroundColor='#f3f3f3'
    foregroundColor='#d7d6d8'
  >
    <rect x='0' y='0' width='2500' height='95' />
  </ContentLoader>
);

export const FooterContentLoader = () => (
  <ContentLoader
    height={400}
    width={2500}
    speed={1}
    backgroundColor='#f3f3f3'
    foregroundColor='#d7d6d8'
  >
    <rect x='0' y='0' width='2500' height='400' />
  </ContentLoader>
);

export const ContentMultipleListLoader = () => (
  <Container maxWidth="sm">
    <List />
    <List />
    <List />
  </Container>
)