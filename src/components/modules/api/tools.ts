import { ToolConfig } from '../../../../types';
import { Tools as ToolsAPIInterface } from '../../../../types/api';
import Module from '../../__module';
import * as _ from '../../utils';

/**
 * Provides methods for accessing installed Editor tools
 */
export default class ToolsAPI extends Module {
  /**
   * Available methods
   */
  public get methods(): ToolsAPIInterface {
    return {
      getBlockTools: () => Array.from(this.Editor.Tools.blockTools.values()),
      updateToolConfig: (toolName: string, config: ToolConfig) => this.updateToolConfig(toolName, config),
    };
  }

  public updateToolConfig(toolName: string, config: ToolConfig): void {
    const tool = this.Editor.Tools.available.get(toolName);

    if (tool) {
      tool.updateConfig(config);
    } else {
      _.log(`Incorrect toolName: ${toolName}`);
    }
  }
}
