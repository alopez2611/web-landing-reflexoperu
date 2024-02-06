import Layout from "../../components/Layout.tsx";
import Title from "../../components/Title.tsx";
import TopsCards from "../../components/TopCards.tsx";
import Olivos from "../../components/location/Olivos.tsx";

export default function CongregationPage() {
  const breadcrumb = {
    enable: true,
    link: "/sedes",
    text1: "Sedes",
    text2: "Los Olivos",
  };

  const title = "Sede Los Olivos";

  return (
    <Layout title={title}>
      <TopsCards />
      <Title name={title} breadcrumb={breadcrumb} />
      <Olivos />
    </Layout>
  );
}
