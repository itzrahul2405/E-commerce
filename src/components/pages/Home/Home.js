import classes from './Home.module.css'

const Home = () => {

    const tourSchedule = [
        {date: 'JUL16', name: 'DETROIT, MI', platform: 'DTE ENERGY MUSIC THEATRE'},
        {date: 'JUL19', name: 'TORONTO,ON', platform: 'BUDWEISER STAGE'},
        {date: 'JUL 22', name: 'BRISTOW, VA', platform: 'JIGGY LUBE LIVE'},
        {date: 'JUL 29', name: 'PHOENIX, AZ', platform: 'AK-CHIN PAVILION'},
        {date: 'AUG 2', name: 'LAS VEGAS, NV', platform: 'T-MOBILE ARENA'},
        {date: 'AUG 7', name: 'CONCORD, CA', platform: 'CONCORD PAVILION'},
    ]

  return (
    <div className={classes.homeContainer}>
      <h2>TOURS</h2>
        <table>
            {tourSchedule.map((tour)=>(
                <tr className={classes.row}>
                    <td>{tour.date}</td>
                    <td>{tour.name}</td>
                    <td>{tour.platform}</td>
                    <td><button className={classes.btn}>BUY TICKETS</button></td>
                </tr>
            ))}
        </table>
    </div>
  );
};

export default Home;
