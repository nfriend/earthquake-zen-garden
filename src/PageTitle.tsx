import React from 'react';

interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps): JSX.Element {
  return <h2 className="text-center my-5 text-lg font-semibold">{title}</h2>;
}

export default PageTitle;
