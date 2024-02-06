import Layout from "../../components/Layout.tsx";
import Title from "../../components/Title.tsx";
import TopsCards from "../../components/TopCards.tsx";
import Jeanne from "../../components/knowus/Jeanne.tsx";

export default function JeannePage() {
  const text2 = "Hermana Juana Cattin";
  const breadcrumb = {
    enable: true,
    link: "/conocenos",
    text1: "Conócenos",
    text2,
  };

  const title = "Hna. Juana Cattin";

  return (
    <Layout title={title}>
      <TopsCards />
      <Title name={text2} breadcrumb={breadcrumb} />
      <Jeanne />
    </Layout>
  );
}
