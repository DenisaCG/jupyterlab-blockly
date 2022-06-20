import BlocklyPy from 'blockly/python';

// Color object for vision
const g_color_values = {
  COLOR_RED: 'RED',
  COLOR_GREEN: 'GREEN',
  COLOR_BLUE: 'BLUE',
  COLOR_ANY: 'ANY'
};

// Shape object for vision
const g_shape_values = {
  SHAPE_SQUARE: 'SQUARE',
  SHAPE_CIRCLE: 'CIRCLE',
  SHAPE_ANY: 'ANY'
};

/*
 * Generators
 */

// Movement

BlocklyPy['niryo_one_move_joints'] = function (block) {
  const number_joints_1 = block.getFieldValue('JOINTS_1');
  const number_joints_2 = block.getFieldValue('JOINTS_2');
  const number_joints_3 = block.getFieldValue('JOINTS_3');
  const number_joints_4 = block.getFieldValue('JOINTS_4');
  const number_joints_5 = block.getFieldValue('JOINTS_5');
  const number_joints_6 = block.getFieldValue('JOINTS_6');

  const code =
    'n.move_joints([' +
    number_joints_1 +
    ', ' +
    number_joints_2 +
    ', ' +
    number_joints_3 +
    ', ' +
    number_joints_4 +
    ', ' +
    number_joints_5 +
    ', ' +
    number_joints_6 +
    '])\n';
  return code;
};

BlocklyPy['niryo_one_move_pose'] = function (block) {
  const number_pose_x = block.getFieldValue('POSE_X');
  const number_pose_y = block.getFieldValue('POSE_Y');
  const number_pose_z = block.getFieldValue('POSE_Z');
  const number_pose_roll = block.getFieldValue('POSE_ROLL');
  const number_pose_pitch = block.getFieldValue('POSE_PITCH');
  const number_pose_yaw = block.getFieldValue('POSE_YAW');

  const code =
    'n.move_pose(' +
    number_pose_x +
    ', ' +
    number_pose_y +
    ', ' +
    number_pose_z +
    ', ' +
    number_pose_roll +
    ', ' +
    number_pose_pitch +
    ', ' +
    number_pose_yaw +
    ')\n';
  return code;
};

BlocklyPy['niryo_one_shift_pose'] = function (block) {
  const dropdown_shift_pose_axis = block.getFieldValue('SHIFT_POSE_AXIS');
  const number_shift_pose_value = block.getFieldValue('SHIFT_POSE_VALUE');

  const code =
    'n.shift_pose(' +
    dropdown_shift_pose_axis +
    ', ' +
    number_shift_pose_value +
    ')\n';
  return code;
};

BlocklyPy['niryo_one_set_arm_max_speed'] = function (block) {
  let value_set_arm_max_speed =
    BlocklyPy.valueToCode(block, 'SET_ARM_MAX_SPEED', BlocklyPy.ORDER_ATOMIC) ||
    '0';
  value_set_arm_max_speed = value_set_arm_max_speed
    .replace('(', '')
    .replace(')', '');
  const code = 'n.set_arm_max_velocity(' + value_set_arm_max_speed + ')\n';
  return code;
};

BlocklyPy['niryo_one_calibrate_auto'] = function (block) {
  const code = 'n.calibrate_auto()\n';
  return code;
};

BlocklyPy['niryo_one_calibrate_manual'] = function (block) {
  const code = 'n.calibrate_manual()\n';
  return code;
};

BlocklyPy['niryo_one_activate_learning_mode'] = function (block) {
  const dropdown_learning_mode_value = block.getFieldValue(
    'LEARNING_MODE_VALUE'
  );
  const code =
    'n.activate_learning_mode(' + dropdown_learning_mode_value + ')\n';
  return code;
};

BlocklyPy['niryo_one_joint'] = function (block) {
  const value_j1 = BlocklyPy.valueToCode(block, 'j1', BlocklyPy.ORDER_ATOMIC)
    .replace('(', '')
    .replace(')', '');
  const value_j2 = BlocklyPy.valueToCode(block, 'j2', BlocklyPy.ORDER_ATOMIC)
    .replace('(', '')
    .replace(')', '');
  const value_j3 = BlocklyPy.valueToCode(block, 'j3', BlocklyPy.ORDER_ATOMIC)
    .replace('(', '')
    .replace(')', '');
  const value_j4 = BlocklyPy.valueToCode(block, 'j4', BlocklyPy.ORDER_ATOMIC)
    .replace('(', '')
    .replace(')', '');
  const value_j5 = BlocklyPy.valueToCode(block, 'j5', BlocklyPy.ORDER_ATOMIC)
    .replace('(', '')
    .replace(')', '');
  const value_j6 = BlocklyPy.valueToCode(block, 'j6', BlocklyPy.ORDER_ATOMIC)
    .replace('(', '')
    .replace(')', '');

  const code =
    '[' +
    value_j1 +
    ', ' +
    value_j2 +
    ', ' +
    value_j3 +
    ', ' +
    value_j4 +
    ', ' +
    value_j5 +
    ', ' +
    value_j6 +
    ']';
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy['niryo_one_move_joint_from_joint'] = function (block) {
  // Position object
  let value_joint = BlocklyPy.valueToCode(
    block,
    'JOINT',
    BlocklyPy.ORDER_ATOMIC
  );
  value_joint = value_joint.replace('(', '').replace(')', '');

  const code = 'n.move_joints(' + value_joint + ')\n';
  return code;
};

BlocklyPy['niryo_one_pose'] = function (block) {
  const value_x = BlocklyPy.valueToCode(block, 'x', BlocklyPy.ORDER_ATOMIC)
    .replace('(', '')
    .replace(')', '');
  const value_y = BlocklyPy.valueToCode(block, 'y', BlocklyPy.ORDER_ATOMIC)
    .replace('(', '')
    .replace(')', '');
  const value_z = BlocklyPy.valueToCode(block, 'z', BlocklyPy.ORDER_ATOMIC)
    .replace('(', '')
    .replace(')', '');
  const value_roll = BlocklyPy.valueToCode(
    block,
    'roll',
    BlocklyPy.ORDER_ATOMIC
  )
    .replace('(', '')
    .replace(')', '');
  const value_pitch = BlocklyPy.valueToCode(
    block,
    'pitch',
    BlocklyPy.ORDER_ATOMIC
  )
    .replace('(', '')
    .replace(')', '');
  const value_yaw = BlocklyPy.valueToCode(block, 'yaw', BlocklyPy.ORDER_ATOMIC)
    .replace('(', '')
    .replace(')', '');

  const code =
    '[' +
    value_x +
    ', ' +
    value_y +
    ', ' +
    value_z +
    ', ' +
    value_roll +
    ', ' +
    value_pitch +
    ', ' +
    value_yaw +
    ']';
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy['niryo_one_move_pose_from_pose'] = function (block) {
  // Position object
  let value_pose = BlocklyPy.valueToCode(block, 'POSE', BlocklyPy.ORDER_ATOMIC);
  value_pose = value_pose.replace('(', '').replace(')', '');

  const code = 'n.move_pose(*' + value_pose + ')\n';
  return code;
};

BlocklyPy['niryo_one_pick_from_pose'] = function (block) {
  // Position object
  let value_pose = BlocklyPy.valueToCode(block, 'POSE', BlocklyPy.ORDER_ATOMIC);
  value_pose = value_pose.replace('(', '').replace(')', '');

  const code = 'n.pick_from_pose(*' + value_pose + ')\n';
  return code;
};

BlocklyPy['niryo_one_place_from_pose'] = function (block) {
  // Position object
  let value_pose = BlocklyPy.valueToCode(block, 'POSE', BlocklyPy.ORDER_ATOMIC);
  value_pose = value_pose.replace('(', '').replace(')', '');

  const code = 'n.place_from_pose(*' + value_pose + ')\n';
  return code;
};

// I/O

BlocklyPy['niryo_one_gpio_state'] = function (block) {
  const dropdown_gpio_state_select = block.getFieldValue('GPIO_STATE_SELECT');
  const code = dropdown_gpio_state_select;
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy['niryo_one_set_pin_mode'] = function (block) {
  let value_pin =
    BlocklyPy.valueToCode(block, 'SET_PIN_MODE_PIN', BlocklyPy.ORDER_ATOMIC) ||
    '(0)';
  value_pin = value_pin.replace('(', '').replace(')', '');
  const dropdown_pin_mode_select = block.getFieldValue('PIN_MODE_SELECT');
  const code =
    'n.pin_mode(' + value_pin + ', ' + dropdown_pin_mode_select + ')\n';
  return code;
};

BlocklyPy['niryo_one_digital_write'] = function (block) {
  let value_pin =
    BlocklyPy.valueToCode(block, 'DIGITAL_WRITE_PIN', BlocklyPy.ORDER_ATOMIC) ||
    '(0)';
  value_pin = value_pin.replace('(', '').replace(')', '');
  const dropdown_pin_write_select = block.getFieldValue('PIN_WRITE_SELECT');
  const code =
    'n.digital_write(' + value_pin + ', ' + dropdown_pin_write_select + ')\n';
  return code;
};

BlocklyPy['niryo_one_digital_read'] = function (block) {
  let value_pin =
    BlocklyPy.valueToCode(block, 'DIGITAL_READ_PIN', BlocklyPy.ORDER_ATOMIC) ||
    '(0)';
  value_pin = value_pin.replace('(', '').replace(')', '');
  const code = 'n.digital_read(' + value_pin + ')';
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy['niryo_one_gpio_select'] = function (block) {
  const dropdown_gpio_select = block.getFieldValue('GPIO_SELECT');
  const code = dropdown_gpio_select;
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy['niryo_one_sw_select'] = function (block) {
  const dropdown_sw_select = block.getFieldValue('SW_SELECT');
  const code = dropdown_sw_select;
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy['niryo_one_set_12v_switch'] = function (block) {
  let value_pin =
    BlocklyPy.valueToCode(block, 'SET_12V_SWITCH', BlocklyPy.ORDER_ATOMIC) ||
    '(0)';
  value_pin = value_pin.replace('(', '').replace(')', '');
  const dropdown_set_12v_switch_select = block.getFieldValue(
    'SET_12V_SWITCH_SELECT'
  );
  const code =
    'n.digital_write(' +
    value_pin +
    ', ' +
    dropdown_set_12v_switch_select +
    ')\n';
  return code;
};

// Tool

BlocklyPy['niryo_one_tool_select'] = function (block) {
  const dropdown_tool_select = block.getFieldValue('TOOL_SELECT');
  const code = dropdown_tool_select;
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy['niryo_one_change_tool'] = function (block) {
  let value_tool_name =
    BlocklyPy.valueToCode(block, 'NEW_TOOL_ID', BlocklyPy.ORDER_ATOMIC) ||
    '(TOOL_NONE)';
  value_tool_name = value_tool_name.replace('(', '').replace(')', '');
  const code = 'n.change_tool(' + value_tool_name + ')\n';
  return code;
};

BlocklyPy['niryo_one_detach_tool'] = function (block) {
  const code = 'n.change_tool(0)\n';
  return code;
};

BlocklyPy['niryo_one_open_gripper'] = function (block) {
  let value_gripper_id =
    BlocklyPy.valueToCode(block, 'OPEN_GRIPPER_ID', BlocklyPy.ORDER_ATOMIC) ||
    '(TOOL_NONE)';
  value_gripper_id = value_gripper_id.replace('(', '').replace(')', '');
  const number_open_speed = block.getFieldValue('OPEN_SPEED');
  const code =
    'n.open_gripper(' + value_gripper_id + ', ' + number_open_speed + ')\n';
  return code;
};

BlocklyPy['niryo_one_close_gripper'] = function (block) {
  let value_gripper_id =
    BlocklyPy.valueToCode(block, 'CLOSE_GRIPPER_ID', BlocklyPy.ORDER_ATOMIC) ||
    '(TOOL_NONE)';
  value_gripper_id = value_gripper_id.replace('(', '').replace(')', '');
  const number_close_speed = block.getFieldValue('CLOSE_SPEED');
  const code =
    'n.close_gripper(' + value_gripper_id + ', ' + number_close_speed + ')\n';
  return code;
};

BlocklyPy['niryo_one_pull_air_vacuum_pump'] = function (block) {
  let value_vacuum_pump_id =
    BlocklyPy.valueToCode(
      block,
      'PULL_AIR_VACUUM_PUMP_ID',
      BlocklyPy.ORDER_ATOMIC
    ) || '(TOOL_NONE)';
  value_vacuum_pump_id = value_vacuum_pump_id.replace('(', '').replace(')', '');
  const code = 'n.pull_air_vacuum_pump(' + value_vacuum_pump_id + ')\n';
  return code;
};

BlocklyPy['niryo_one_push_air_vacuum_pump'] = function (block) {
  let value_vacuum_pump_id =
    BlocklyPy.valueToCode(
      block,
      'PUSH_AIR_VACUUM_PUMP_ID',
      BlocklyPy.ORDER_ATOMIC
    ) || '(TOOL_NONE)';
  value_vacuum_pump_id = value_vacuum_pump_id.replace('(', '').replace(')', '');
  const code = 'n.push_air_vacuum_pump(' + value_vacuum_pump_id + ')\n';
  return code;
};

BlocklyPy['niryo_one_setup_electromagnet'] = function (block) {
  let value_electromagnet_id =
    BlocklyPy.valueToCode(
      block,
      'SETUP_ELECTROMAGNET_ID',
      BlocklyPy.ORDER_ATOMIC
    ) || '(TOOL_NONE)';
  value_electromagnet_id = value_electromagnet_id
    .replace('(', '')
    .replace(')', '');
  let value_electromagnet_pin =
    BlocklyPy.valueToCode(
      block,
      'SETUP_ELECTROMAGNET_PIN',
      BlocklyPy.ORDER_ATOMIC
    ) || '(0)';
  value_electromagnet_pin = value_electromagnet_pin
    .replace('(', '')
    .replace(')', '');
  const code =
    'n.setup_electromagnet(' +
    value_electromagnet_id +
    ', ' +
    value_electromagnet_pin +
    ')\n';
  return code;
};

BlocklyPy['niryo_one_activate_electromagnet'] = function (block) {
  let value_electromagnet_id =
    BlocklyPy.valueToCode(
      block,
      'ACTIVATE_ELECTROMAGNET_ID',
      BlocklyPy.ORDER_ATOMIC
    ) || '(TOOL_NONE)';
  value_electromagnet_id = value_electromagnet_id
    .replace('(', '')
    .replace(')', '');
  let value_electromagnet_pin =
    BlocklyPy.valueToCode(
      block,
      'ACTIVATE_ELECTROMAGNET_PIN',
      BlocklyPy.ORDER_ATOMIC
    ) || '(0)';
  value_electromagnet_pin = value_electromagnet_pin
    .replace('(', '')
    .replace(')', '');
  const code =
    'n.activate_electromagnet(' +
    value_electromagnet_id +
    ', ' +
    value_electromagnet_pin +
    ')\n';
  return code;
};

BlocklyPy['niryo_one_deactivate_electromagnet'] = function (block) {
  let value_electromagnet_id =
    BlocklyPy.valueToCode(
      block,
      'DEACTIVATE_ELECTROMAGNET_ID',
      BlocklyPy.ORDER_ATOMIC
    ) || '(TOOL_NONE)';
  value_electromagnet_id = value_electromagnet_id
    .replace('(', '')
    .replace(')', '');
  let value_electromagnet_pin =
    BlocklyPy.valueToCode(
      block,
      'DEACTIVATE_ELECTROMAGNET_PIN',
      BlocklyPy.ORDER_ATOMIC
    ) || '(0)';
  value_electromagnet_pin = value_electromagnet_pin
    .replace('(', '')
    .replace(')', '');
  const code =
    'n.deactivate_electromagnet(' +
    value_electromagnet_id +
    ', ' +
    value_electromagnet_pin +
    ')\n';
  return code;
};

// Utility

BlocklyPy['niryo_one_sleep'] = function (block) {
  let value_sleep_time =
    BlocklyPy.valueToCode(block, 'SLEEP_TIME', BlocklyPy.ORDER_ATOMIC) || '0';
  value_sleep_time = value_sleep_time.replace('(', '').replace(')', '');
  const code = 'n.wait(' + value_sleep_time + ')\n';
  return code;
};

BlocklyPy['niryo_one_comment'] = function (block) {
  const text_comment_text = block.getFieldValue('COMMENT_TEXT');
  const code = ' #' + text_comment_text + '\n';
  return code;
};

BlocklyPy['niryo_one_break_point'] = function (block) {
  const code = 'n.break_point()\n';
  return code;
};

// Vision

BlocklyPy['niryo_one_vision_color'] = function (block) {
  const dropdown_color_select = block.getFieldValue('COLOR_SELECT');
  let code = dropdown_color_select;
  code = '"' + g_color_values[code] + '"';
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy['niryo_one_vision_shape'] = function (block) {
  const dropdown_shape_select = block.getFieldValue('SHAPE_SELECT');
  let code = dropdown_shape_select;
  code = '"' + g_shape_values[code] + '"';
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy['niryo_one_vision_pick'] = function (block) {
  // Color (int) value (see g_shape_values at top of this file)
  let value_color =
    BlocklyPy.valueToCode(block, 'COLOR_SWITCH', BlocklyPy.ORDER_ATOMIC) ||
    '(0)';
  value_color = value_color.replace('(', '').replace(')', '');

  // Shape (int) value (see g_shape_values at top of this file)
  let value_shape =
    BlocklyPy.valueToCode(block, 'SHAPE_SWITCH', BlocklyPy.ORDER_ATOMIC) ||
    '(0)';
  value_shape = value_shape.replace('(', '').replace(')', '');

  // Name of workspace
  let workspace_name =
    BlocklyPy.valueToCode(block, 'WORKSPACE_NAME', BlocklyPy.ORDER_ATOMIC) ||
    '(0)';
  workspace_name = workspace_name.replace('(', '').replace(')', '');

  // Height in centimeter
  let height_offset =
    BlocklyPy.valueToCode(block, 'HEIGHT_OFFSET', BlocklyPy.ORDER_ATOMIC) ||
    '(0)';
  height_offset = height_offset.replace('(', '').replace(')', '');

  const code =
    'n.vision_pick(' +
    workspace_name +
    ', float(' +
    height_offset +
    ')/1000, ' +
    value_shape +
    ', ' +
    value_color +
    ')[0]';
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy['niryo_one_vision_is_object_detected'] = function (block) {
  // Color (int) value (see g_shape_values at top of this file)
  let value_color =
    BlocklyPy.valueToCode(block, 'COLOR_SWITCH', BlocklyPy.ORDER_ATOMIC) ||
    '(0)';
  value_color = value_color.replace('(', '').replace(')', '');

  // Shape (int) value (see g_shape_values at top of this file)
  let value_shape =
    BlocklyPy.valueToCode(block, 'SHAPE_SWITCH', BlocklyPy.ORDER_ATOMIC) ||
    '(0)';
  value_shape = value_shape.replace('(', '').replace(')', '');

  // Name of workspace
  let workspace_name =
    BlocklyPy.valueToCode(block, 'WORKSPACE_NAME', BlocklyPy.ORDER_ATOMIC) ||
    '(0)';
  workspace_name = workspace_name.replace('(', '').replace(')', '');

  const code =
    'n.detect_object(' +
    workspace_name +
    ', ' +
    value_shape +
    ', ' +
    value_color +
    ')[0]';
  return [code, BlocklyPy.ORDER_NONE];
};

// Conveyor

BlocklyPy['niryo_one_conveyor_models'] = function (block) {
  const conveyor_id_map = {
    CONVEYOR_1: 6,
    CONVEYOR_2: 7
  };
  const conveyor_model_id = block.getFieldValue('CONVEYOR_SELECT');
  const code = conveyor_id_map[conveyor_model_id];
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy['niryo_one_conveyor_use'] = function (block) {
  let conveyor_id =
    BlocklyPy.valueToCode(block, 'CONVEYOR_SWITCH', BlocklyPy.ORDER_ATOMIC) ||
    '(0)';
  conveyor_id = conveyor_id.replace('(', '').replace(')', '');
  const code = 'n.set_conveyor(' + conveyor_id + ', True)\n';
  return code;
};

BlocklyPy['niryo_one_conveyor_control'] = function (block) {
  let conveyor_id =
    BlocklyPy.valueToCode(block, 'CONVEYOR_SWITCH', BlocklyPy.ORDER_ATOMIC) ||
    '(0)';
  conveyor_id = conveyor_id.replace('(', '').replace(')', '');
  let speed_percent =
    BlocklyPy.valueToCode(block, 'SPEED_PERCENT', BlocklyPy.ORDER_ATOMIC) ||
    '(0)';
  speed_percent = speed_percent.replace('(', '').replace(')', '');
  const direction = block.getFieldValue('DIRECTION_SELECT');
  const code =
    'n.control_conveyor(' +
    conveyor_id +
    ', True, ' +
    speed_percent +
    ', ' +
    direction +
    ')\n';
  return code;
};

BlocklyPy['niryo_one_conveyor_stop'] = function (block) {
  let conveyor_id =
    BlocklyPy.valueToCode(block, 'CONVEYOR_SWITCH', BlocklyPy.ORDER_ATOMIC) ||
    '(0)';
  conveyor_id = conveyor_id.replace('(', '').replace(')', '');
  const code = 'n.control_conveyor(' + conveyor_id + ', False, 0, 1)\n';
  return code;
};
