import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={317}
    height={414}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="255" rx="8" ry="8" width="77" height="31" />
    <rect x="0" y="300" rx="8" ry="8" width="317" height="134" />
    <rect x="1" y="449" rx="8" ry="8" width="317" height="53" />
    <rect x="1" y="14" rx="8" ry="8" width="317" height="229" />
    <rect x="114" y="140" rx="0" ry="0" width="23" height="25" />
    <rect x="178" y="255" rx="8" ry="8" width="77" height="31" />
  </ContentLoader>
);

export default Skeleton;
