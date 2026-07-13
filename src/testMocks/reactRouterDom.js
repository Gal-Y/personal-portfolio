import React from 'react';

export const Link = React.forwardRef(({ to, children, ...props }, ref) => (
  <a ref={ref} href={typeof to === 'string' ? to : to?.pathname || '#'} {...props}>
    {children}
  </a>
));

Link.displayName = 'Link';

export const MemoryRouter = ({ children }) => <>{children}</>;

export const useParams = () => ({});
