import "../../components/Components.css";
import LatestBook from './LatestBook'

const colors = {
    pink: "#edabb7",
    yellow: "#f7db73",
    blue: "#9ed5f5"
};

export default function LatestBooks() {
    return (
        <section className='LatestBooks'>
            <div className="LatestBooks__wrapper z-2 margins ">
                <div className="LatestBooks__articles-grid flex flex-wrap ">
                    <LatestBook color={colors.pink} title="The Girl on the Train on the Train on the Train" author="Paula Hawking" description="Non, error ullam soluta accusamus perferendis asperiores ea aliquam vel itaque, suscipit deserunt. Non, error ullam soluta accusamus perferendis asperiores ea aliquam vel itaque, suscipit deserunt." cover="https://hewpr.com/wp-content/uploads/2015/01/The-Girl-on-the-Train-UK-e1420761445402.jpg" seeBook=""/>
                    <LatestBook color={colors.yellow} title="Ugly Love" author="Colleen Hoover" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." cover="https://static.wixstatic.com/media/448994_852ee2fb41374fb78c9c3abcf9a2a276.jpg/v1/fill/w_437,h_665,al_c,lg_1,q_80/448994_852ee2fb41374fb78c9c3abcf9a2a276.jpg" seeBook=""/>
                    <LatestBook color={colors.blue} title="Little Fires Everywhere" author="Celeste Ng" description="Veritatis autem praesentium nam architecto dolor tempore tempora laborum." cover="https://cdn.waterstones.com/bookjackets/large/9780/3491/9780349142920.jpg" seeBook=""/>
                </div>
            </div>

        </section>
    )
}

export { colors }