import React, { Component } from 'react'
import ModuleHeadingBar from './ModuleHeadingBar'
import baricon1 from '../images/learn-icon.png'
import baricon2 from '../images/instructions-icon.png'
import baricon3 from '../images/concepts-icon.png'

class QuestionContainerText extends Component {
    render() {
        return (
            <div style={{textAlign: "left", padding: "2rem"}}>
                <ModuleHeadingBar img={baricon1} txt="Question"/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, pariatur inventore. Doloremque labore perspiciatis temporibus adipisci ratione! At suscipit velit, tenetur autem nulla expedita hic commodi maxime, porro, incidunt magnam doloribus. Tempore quia, ratione recusandae placeat, rerum reiciendis fuga delectus perspiciatis similique vitae asperiores quisquam neque. Dolor, laudantium nam reiciendis facilis est beatae, quisquam, nobis saepe ipsa harum repellat perspiciatis provident? Deserunt explicabo unde cumque commodi expedita magni. Voluptatibus animi eos sapiente natus voluptates ipsa quaerat perspiciatis. Autem saepe qui, voluptatem repellendus ratione corrupti voluptas non totam assumenda voluptatibus ducimus quam et aspernatur accusantium delectus neque incidunt? Quis, quod vero!
                <ModuleHeadingBar img={baricon2} txt="Instructions"/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sit nihil vel, eum qui mollitia porro omnis incidunt delectus error praesentium atque cupiditate non nostrum accusamus adipisci optio hic eveniet consequuntur molestiae. Aliquid recusandae commodi consectetur, repellendus quaerat voluptatibus odit quasi enim, reiciendis reprehenderit laborum fuga. Earum ullam consequuntur quasi non nam laboriosam assumenda iusto sequi reiciendis delectus consectetur, quisquam unde amet, dolor ea? Praesentium voluptates soluta eum libero numquam necessitatibus sint, sequi rerum eos quidem quo velit modi non quis officia fugiat amet nisi pariatur laboriosam unde ad, accusamus iure vel. Quis eligendi nam aperiam ratione, ad soluta a.
                <ModuleHeadingBar img={baricon3} txt="Concepts Review"/>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos porro consectetur eos laudantium consequuntur repudiandae autem culpa sequi, quibusdam, id, quam excepturi. Amet in ullam, explicabo modi officiis eum quos deleniti. Quasi natus quis fugit qui obcaecati illo, eum exercitationem ab culpa molestiae voluptas mollitia nemo vero voluptatibus? Cum exercitationem vitae autem, sit vero sed accusantium voluptatum! Ex dolore nostrum magnam quis harum, sapiente et, ut aliquid eius natus doloremque animi quos aut sunt. Deleniti consequatur est vel sint laboriosam eum quo sed sapiente dolor, odio facilis natus perferendis totam beatae aliquam quidem voluptate fuga voluptatibus exercitationem error ad dolorem!
            </div>
        )
    }
}

export default QuestionContainerText
