import React from 'react';

import { OutAnimation } from '../animationControllers';
import './fade.css';

const FadeOut = props => <OutAnimation {...props} animationType="fade" />;

export default FadeOut;
