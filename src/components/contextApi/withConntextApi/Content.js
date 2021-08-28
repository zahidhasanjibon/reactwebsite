import React, { useContext } from 'react';
import HoverCounter from './HoverCounter';
import MainCounter from './MainCounter';
import LibraryContext from './RealContextApi';

// export default function Content() {
//     return (
//         <div>
//             <h1>this is content</h1>
//             <MainCounter>
//                 {(count, counterFunc) => (
//                     <LibraryContext.Consumer>
//                         {({ theme, switchTheme }) => (
//                             <HoverCounter
//                                 count={count}
//                                 counterFunc={counterFunc}
//                                 themeFunc={theme}
//                                 themeChangerFunc={switchTheme}
//                             />
//                         )}
//                     </LibraryContext.Consumer>
//                 )}
//             </MainCounter>
//         </div>
//     );
// }

// using useContext

export default function Content() {
    const context = useContext(LibraryContext);
    const { theme, switchTheme } = context;
    return (
        <div>
            <h1>this is content</h1>
            <MainCounter>
                {(count, counterFunc) => (
                    <HoverCounter
                        count={count}
                        counterFunc={counterFunc}
                        themeFunc={theme}
                        themeChangerFunc={switchTheme}
                    />
                )}
            </MainCounter>
        </div>
    );
}

// in class way

// export default class Content extends React.Component {
//     render() {
//         const { theme, switchTheme } = this.context;
//         return (
//             <div>
//                 <h1>this is content</h1>
//                 <MainCounter>
//                     {(count, counterFunc) => (
//                         <HoverCounter
//                             count={count}
//                             counterFunc={counterFunc}
//                             themeFunc={theme}
//                             themeChangerFunc={switchTheme}
//                         />
//                     )}
//                 </MainCounter>
//             </div>
//         );
//     }
// }

// Content.contextType = LibraryContext;
