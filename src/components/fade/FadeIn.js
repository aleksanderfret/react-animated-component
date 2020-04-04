import React from 'react';

import { InAnimation } from '../animationControllers';
import './fade.css';

const FadeIn = props => <InAnimation {...props} animationType="fade" />;

export default FadeIn;
