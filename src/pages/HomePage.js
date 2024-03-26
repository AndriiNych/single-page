// import { AuthContainer } from 'components/authenticate';
// import { Home } from 'components/main/Home';
// import Copyright from 'components/Copyright';

export default function HomePage() {
  console.log('Home page');

  const htmlContent = `    
  <div style="margin-bottom: 40px">
  <h2
    style="
    font-family: 'Futura PT';
    font-weight: 450;
    font-size: 16px;
    line-height: 21px;
    margin: 0 0;
    color: #000000;
  "
  >
    Важливі для батьків критерії, яких ми дотримуємось при створенні лінійки
    дитячого верхнього одягу:
  </h2>
  <script>
    (()=>{console.log("text");})()
    
  </script>
</div>
`;

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    // <AuthContainer>
    // <Home sx={{ mt: 1, width: 1 }} />
    //   <Copyright sx={{ mt: 'auto', pb: 2 }} />
    // </AuthContainer>
  );
}
