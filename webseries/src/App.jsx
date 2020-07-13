import React from 'react';
import Card from './Card';
import Data from './Data';
function App() {
  return (
    <>
    <h1 className="heading">Top 5 Netflix Series </h1>
      <Card
        imgsrc={Data[0].imgsrc}
        title={Data[0].title}
        category={Data[0].category}
        link={Data[0].link} />

      <Card
        imgsrc={Data[1].imgsrc}
        title={Data[1].title}
        category={Data[1].category}
        link={Data[1].link} />

      <Card
        imgsrc={Data[2].imgsrc}
        title={Data[2].title}
        category={Data[2].category}
        link={Data[2].link} />

      <Card
        imgsrc={Data[3].imgsrc}
        title={Data[3].title}
        category={Data[3].category}
        link={Data[3].link} />

      <Card
        imgsrc={Data[4].imgsrc}
        title={Data[4].title}
        category={Data[4].category}
        link={Data[4].link} />
    </>
  );
}

export default App;
