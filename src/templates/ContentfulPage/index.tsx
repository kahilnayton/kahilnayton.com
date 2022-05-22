const ContentfulTemplate = ({ ...props }: any) => {
  return <pre>{JSON.stringify(props, null, 4)}</pre>
}

export default ContentfulTemplate
