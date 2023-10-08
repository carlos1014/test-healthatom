import { Container, ContainerBtnInfo } from "./Card.style";
import Button from "@/components/atoms/Button";
import { planetsService } from "@/services/data.services";

interface Card {
  name: string;
  homeworld: string;
}


const Card = (props: Card) => {
  const fetchPlanets = async () => {
    const { data } = await planetsService(homeworld);
    if (data) {
      console.log(data.name)
    }
  };
  const { name, homeworld } = props;
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
      </ContainerBtnInfo>

    </Container>
  );
};

export default Card;
