import Layout from "../../components/Layout.tsx";
import Title from "../../components/Title.tsx";
import TopsCards from "../../components/TopCards.tsx";
import Congregation from "../../components/knowus/Congregation.tsx";

export default function CongregationPage() {
  const breadcrumb = {
    enable: true,
    link: "/conocenos",
    text1: "Conócenos",
    text2: "Congregación",
  };

  const title = "Congregación";

  return (
    <Layout title={title}>
      <TopsCards />
      <Title name="Hermanas de San Pablo de Chartres" breadcrumb={breadcrumb} />
      <Congregation />
    </Layout>
  );
}
