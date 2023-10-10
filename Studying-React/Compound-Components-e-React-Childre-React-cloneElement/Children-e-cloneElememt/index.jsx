const Parent = ({ children }) => {

  return Children.map(children, (child) => {
    console.log(child)
    const newChild = cloneElement(child, { ...stylesheet })
    return newChild
  })
}

const Helo = () => (
  <Parent>
    <p>Heloooooo</p>
    <p>Woooorld</p>
  </Parent>
)