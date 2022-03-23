{
  routes.map(({ path, name, Component }, key) => (
    <Route
      exact
      path={path}
      key={key}
      render={(props) => {
        const crumbs = routes
          .filter(({ path }) => props.match.path.includes(path))
          .map(({ path, ...rest }) => ({
            path: Object.keys(props.match.params).length
              ? Object.keys(props.match.params).reduce(
                  (path, param) =>
                    path.replace(`:${param}`, props.match.params[param]),
                  path
                )
              : path,
            ...rest,
          }));
        console.log(`Generated crumbs for ${props.match.path}`);
        crumbs.map(({ name, path }) => console.log({ name, path }));
        return (
          <div className="p-8">
            <Component {...props} />
          </div>
        );
      }}
    />
  ));
}
