import React from 'react';

import { InOutAnimation } from '../animationControllers';
import './fade.css';

const FadeInOut = props => <InOutAnimation {...props} animationType="fade" />;

export default FadeInOut;
