

interface Props {
    namePlanet: string
  }

const Planet = (props: Props) => {
    const { namePlanet } = props;
    console.log("namePlanet", namePlanet)
  return (
    <div>
        {namePlanet}
    </div>
  )
}

export default Planet
