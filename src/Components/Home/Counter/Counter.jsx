import './Counter.css'
import CountUp from 'react-countup';


const Counter = () => {
    return (
        <div className='container counter'>
            <div className='count-text col-6 col-md-3'>
                {/* <CountUp
                    start={0}
                    end={360}
                    duration={5}
                    decimals={0}
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                >
                    {({ countUpRef, start }) => (
                       
                    )}
                </CountUp> */}
                <div>
                    <h1> <span className='count' /* ref={countUpRef} */ />360 +</h1>
                    <p>Completed Projects</p>
                </div>
            </div>

            <div className='count-text col-6 col-md-3'>
                {/*     <CountUp
                    start0={0}
                    end={330}
                    duration={5}
                    decimals={0}
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                >
                    {({ countUpRef, start0 }) => (
                        
                    )}
                </CountUp> */}
                <div>
                    <h1> <span className='count' /* ref={countUpRef} */ />330 +</h1>
                    <p>Happy Clients</p>
                </div>
            </div>

            <div className='count-text col-6 col-md-3'>
                {/*     <CountUp
                    start1={0}
                    end={90}
                    duration={5}
                    decimals={0}
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                >
                    {({ countUpRef, start1 }) => (
                       
                    )}
                </CountUp> */} <div>
                    <h1> <span className='count' /* ref={countUpRef} */ /> 90%</h1>
                    <p>Reports Faster</p>
                </div>
            </div>

            <div className='count-text col-6 col-md-3'>
                {/*    <CountUp
                    start2={0}
                    end={30}
                    duration={5}
                    decimals={0}
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                >
                    {({ countUpRef, start2 }) => (
                        
                    )}
                </CountUp> */}
                <div>
                    <h1> <span className='count' /* ref={countUpRef} */ />18+</h1>
                    <p>Team Members</p>
                </div>
            </div>

        </div>
    );
};

export default Counter;