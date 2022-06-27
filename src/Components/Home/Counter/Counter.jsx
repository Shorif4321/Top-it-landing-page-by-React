import './Counter.css'
import CountUp from 'react-countup';


const Counter = () => {
    return (
        <div className='container counter'>
            <div className='count-text col-6 col-md-3'>
                <CountUp
                    start={0}
                    end={360}
                    duration={5}
                    decimals={0}
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                >
                    {({ countUpRef, start }) => (
                        <div>
                            <h1> <span className='count' ref={countUpRef} />+</h1>
                            <p>Completed Projects</p>
                        </div>
                    )}
                </CountUp>
            </div>

            <div className='count-text col-6 col-md-3'>
                <CountUp
                    start0={0}
                    end={330}
                    duration={5}
                    decimals={0}
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                >
                    {({ countUpRef, start0 }) => (
                        <div>
                            <h1> <span className='count' ref={countUpRef} />+</h1>
                            <p>Happy Clients</p>
                        </div>
                    )}
                </CountUp>
            </div>

            <div className='count-text col-6 col-md-3'>
                <CountUp
                    start1={0}
                    end={90}
                    duration={5}
                    decimals={0}
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                >
                    {({ countUpRef, start1 }) => (
                        <div>
                            <h1> <span className='count' ref={countUpRef} />%</h1>
                            <p>Reports Faster</p>
                        </div>
                    )}
                </CountUp>
            </div>

            <div className='count-text col-6 col-md-3'>
                <CountUp
                    start2={0}
                    end={30}
                    duration={5}
                    decimals={0}
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                >
                    {({ countUpRef, start2 }) => (
                        <div>
                            <h1> <span className='count' ref={countUpRef} />+</h1>
                            <p>Team Members</p>
                        </div>
                    )}
                </CountUp>
            </div>

        </div>
    );
};

export default Counter;