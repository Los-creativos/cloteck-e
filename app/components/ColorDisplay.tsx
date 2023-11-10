export default function ColorDisplay({ hexColor, diameter }: {hexColor: string, diameter: number}) {
  const style = {
    width: `${diameter}px`,
    height: `${diameter}px`,
    borderRadius: '50%',
    backgroundColor: hexColor,
  };

  return <div style={style}></div>;
}
