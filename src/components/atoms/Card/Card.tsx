import { Container, ContainerBtnInfo } from "./Card.style";
import Button from "@/components/atoms/Button";
import {Planet} from "@/components/molecules/Planet";
import { planetsService } from "@/services/data.services";

interface Card {
  name: string;
  homeworld: string;
  namePlanet: string
}


const Card = (props: Card) => {
  const fetchPlanets = async () => {
    const { data } = await planetsService(homeworld);
    if (data) {
      console.log(data.name);
      const namePlanet = data.name;
      return namePlanet
    }
  };
  const { name, homeworld, namePlanet } = props;
  return (
    <Container>
      <div style={{ width: '70%'  }}>
        {name}
      </div>
      <ContainerBtnInfo>
        <Button
          type="button"
          variant="outlined"
          onClick={fetchPlanets}
          style={{
            width: "100%",
            margin: 12,
          }}
        >
          MÁS INFO
        </Button>
        <Button
          type="button"
          variant="outlined"
          onClick={fetchPlanets}
          style={{
            width: "100%",
            margin: 12,
          }}
        >
          FAVORITOS
        </Button>
        <Planet namePlanet={namePlanet}></Planet>
      </ContainerBtnInfo>
    </Container>
  );
};

export default Card;
