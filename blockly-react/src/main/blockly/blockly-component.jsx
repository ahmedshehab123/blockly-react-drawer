
import React,{Component} from 'react';
import Blockly from 'node-blockly/browser';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

import BlocklyDrawer, { Block, Category } from 'react-blockly-drawer';
import './blockly-demo.css';

const helloWorld =  {
    name: 'HelloWorld',
    category: 'Demo',
    block: {
        init: function () {
            this.jsonInit({
                message0: 'Hello %1',
                args0: [
                    {
                        type: 'field_input',
                        name: 'NAME',
                        check: 'String',
                    },
                ],
                output: 'String',
                colour: 160,
                tooltip: 'Says Hello',
            });
        },
    },
    generator: (block) => {
        const message = `'${block.getFieldValue('NAME')}'` || '\'\'';
        const code = `console.log('Hello ${message}')`;
        return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
};
export class BlocklyHomeComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            myCode:'',
            myWorkspace:'<xml xmlns="http://www.w3.org/1999/xhtml"> </xml>'
        };

    }

    playCode =event=>{
      alert(eval(this.state.myCode));
    };

    updateCode =(code, workspace)=>{

        //const myCode=code;
        // const myWorkspace=workspace;
        //if(myCode !== ''){
        if(this.state.myWorkspace !== workspace) {
            this.setState({myWorkspace: workspace, myCode: code});
        }
       // }
       // alert(workspace);
    }
    render(){
         //console.log('Render >>>>');
        return(

            <div className="app-container">
                <div  className="main blockly-panel" >
                    <BlocklyDrawer

                        onChange={ this.updateCode }
                        appearance={
                            {
                                categories: {
                                    Demo: {
                                        colour: '270'
                                    },
                                },
                            }
                        }
                       workspaceXML={this.state.myWorkspace}
                    >


                        <category id="catLogic" colour="210" name="Logic">
                            <Block type="controls_if"></Block>
                            <Block type="logic_compare"></Block>
                            <Block type="logic_operation"></Block>
                            <Block type="logic_negate"></Block>
                            <Block type="logic_boolean"></Block>
                            <Block type="logic_null"></Block>
                            <Block type="logic_ternary"></Block>
                        </category>
                        <category id="catLoops" colour="120" name="Loops">
                            <Block type="controls_repeat_ext">
                                <value name="TIMES">
                                    <shadow type="math_number">
                                        <field name="NUM">10</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="controls_whileUntil"></Block>
                            <Block type="controls_for">
                                <value name="FROM">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                </value>
                                <value name="TO">
                                    <shadow type="math_number">
                                        <field name="NUM">10</field>
                                    </shadow>
                                </value>
                                <value name="BY">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="controls_forEach"></Block>
                            <Block type="controls_flow_statements"></Block>
                        </category>
                        <category id="catMath" colour="230" name="Math">
                            <Block type="math_number"></Block>
                            <Block type="math_arithmetic">
                                <value name="A">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                </value>
                                <value name="B">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="math_single">
                                <value name="NUM">
                                    <shadow type="math_number">
                                        <field name="NUM">9</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="math_trig">
                                <value name="NUM">
                                    <shadow type="math_number">
                                        <field name="NUM">45</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="math_constant"></Block>
                            <Block type="math_number_property">
                                <value name="NUMBER_TO_CHECK">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="math_change">
                                <value name="DELTA">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="math_round">
                                <value name="NUM">
                                    <shadow type="math_number">
                                        <field name="NUM">3.1</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="math_on_list"></Block>
                            <Block type="math_modulo">
                                <value name="DIVIDEND">
                                    <shadow type="math_number">
                                        <field name="NUM">64</field>
                                    </shadow>
                                </value>
                                <value name="DIVISOR">
                                    <shadow type="math_number">
                                        <field name="NUM">10</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="math_constrain">
                                <value name="VALUE">
                                    <shadow type="math_number">
                                        <field name="NUM">50</field>
                                    </shadow>
                                </value>
                                <value name="LOW">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                </value>
                                <value name="HIGH">
                                    <shadow type="math_number">
                                        <field name="NUM">100</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="math_random_int">
                                <value name="FROM">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                </value>
                                <value name="TO">
                                    <shadow type="math_number">
                                        <field name="NUM">100</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="math_random_float"></Block>
                        </category>
                        <category id="catText" colour="160" name="Text">
                            <Block type="text"></Block>
                            <Block type="text_join"></Block>
                            <Block type="text_append">
                                <value name="TEXT">
                                    <shadow type="text"></shadow>
                                </value>
                            </Block>
                            <Block type="text_length">
                                <value name="VALUE">
                                    <shadow type="text">
                                        <field name="TEXT">abc</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="text_isEmpty">
                                <value name="VALUE">
                                    <shadow type="text">
                                        <field name="TEXT"></field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="text_indexOf">
                                <value name="VALUE">
                                    <Block type="variables_get">
                                        <field name="VAR">text</field>
                                    </Block>
                                </value>
                                <value name="FIND">
                                    <shadow type="text">
                                        <field name="TEXT">abc</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="text_charAt">
                                <value name="VALUE">
                                    <Block type="variables_get">
                                        <field name="VAR">text</field>
                                    </Block>
                                </value>
                            </Block>
                            <Block type="text_getSubstring">
                                <value name="STRING">
                                    <Block type="variables_get">
                                        <field name="VAR">text</field>
                                    </Block>
                                </value>
                            </Block>
                            <Block type="text_changeCase">
                                <value name="TEXT">
                                    <shadow type="text">
                                        <field name="TEXT">abc</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="text_trim">
                                <value name="TEXT">
                                    <shadow type="text">
                                        <field name="TEXT">abc</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="text_print">
                                <value name="TEXT">
                                    <shadow type="text">
                                        <field name="TEXT">abc</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="text_prompt_ext">
                                <value name="TEXT">
                                    <shadow type="text">
                                        <field name="TEXT">abc</field>
                                    </shadow>
                                </value>
                            </Block>
                        </category>
                        <category id="catLists" colour="260" name="Lists">
                            <Block type="lists_create_with">
                                <mutation items="0"></mutation>
                            </Block>
                            <Block type="lists_create_with"></Block>
                            <Block type="lists_repeat">
                                <value name="NUM">
                                    <shadow type="math_number">
                                        <field name="NUM">5</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="lists_length"></Block>
                            <Block type="lists_isEmpty"></Block>
                            <Block type="lists_indexOf">
                                <value name="VALUE">
                                    <Block type="variables_get">
                                        <field name="VAR">list</field>
                                    </Block>
                                </value>
                            </Block>
                            <Block type="lists_getIndex">
                                <value name="VALUE">
                                    <Block type="variables_get">
                                        <field name="VAR">list</field>
                                    </Block>
                                </value>
                            </Block>
                            <Block type="lists_setIndex">
                                <value name="LIST">
                                    <Block type="variables_get">
                                        <field name="VAR">list</field>
                                    </Block>
                                </value>
                            </Block>
                            <Block type="lists_getSublist">
                                <value name="LIST">
                                    <Block type="variables_get">
                                        <field name="VAR">list</field>
                                    </Block>
                                </value>
                            </Block>
                            <Block type="lists_split">
                                <value name="DELIM">
                                    <shadow type="text">
                                        <field name="TEXT">,</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="lists_sort"></Block>
                        </category>
                        <category id="catColour" colour="20" name="Color">
                            <Block type="colour_picker"></Block>
                            <Block type="colour_random"></Block>
                            <Block type="colour_rgb">
                                <value name="RED">
                                    <shadow type="math_number">
                                        <field name="NUM">100</field>
                                    </shadow>
                                </value>
                                <value name="GREEN">
                                    <shadow type="math_number">
                                        <field name="NUM">50</field>
                                    </shadow>
                                </value>
                                <value name="BLUE">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                            </Block>
                            <Block type="colour_blend">
                                <value name="COLOUR1">
                                    <shadow type="colour_picker">
                                        <field name="COLOUR">#ff0000</field>
                                    </shadow>
                                </value>
                                <value name="COLOUR2">
                                    <shadow type="colour_picker">
                                        <field name="COLOUR">#3333ff</field>
                                    </shadow>
                                </value>
                                <value name="RATIO">
                                    <shadow type="math_number">
                                        <field name="NUM">0.5</field>
                                    </shadow>
                                </value>
                            </Block>
                        </category>
                        <sep></sep>
                        <category id="catVariables" colour="330" custom="VARIABLE" name="Variables"></category>
                        <category id="catFunctions" colour="290" custom="PROCEDURE" name="Functions"></category>


                    </BlocklyDrawer>


                </div>

                <div  className="main output-panel">

                    <SyntaxHighlighter language='javascript' style={docco}>{this.state.myCode}</SyntaxHighlighter>

                </div>
                <div onClick={this.playCode} className="play-button material-icons">
                    play_arrow
                </div>
            </div>


                );
    }
}