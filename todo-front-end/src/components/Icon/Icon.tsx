import React from 'react'
type IconProps = {
  variant?: string;
}

const Icon = ({ variant }: IconProps ) => {
  const [ iconSrc, setIconSrc ] = React.useState('')

  React.useEffect(() => {
    const mount = async () => {
      const result = await import(`../../image/${variant}.svg`)
      setIconSrc( result.default );
    }

    mount();
  }, [ variant ])

  return <img src={ iconSrc } width="32px" height="32px" alt={ variant } />;
}

export default Icon
