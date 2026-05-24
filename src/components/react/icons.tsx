import React from 'react';
import {
  Target, Zap, ShieldCheck as Shield, Handshake, TrendingUp, GraduationCap,
  Wrench, Settings, BarChart4, BookOpen, ArrowRight, CheckCircle,
  Lightbulb, Mail, Phone, MapPin, Clock, Search,
} from 'lucide-react';

const size = 22;
const sizeSm = 18;
const sizeXs = 16;

export const iconTarget = React.createElement(Target, { size });
export const iconZap = React.createElement(Zap, { size });
export const iconShield = React.createElement(Shield, { size });
export const iconHandshake = React.createElement(Handshake, { size });
export const iconTrending = React.createElement(TrendingUp, { size });
export const iconGrad = React.createElement(GraduationCap, { size });
export const iconWrench = React.createElement(Wrench, { size });
export const iconSettings = React.createElement(Settings, { size });
export const iconBarChart = React.createElement(BarChart4, { size });
export const iconBook = React.createElement(BookOpen, { size });
export const iconCheck = React.createElement(CheckCircle, { size: sizeSm });
export const iconLightbulb = React.createElement(Lightbulb, { size });
export const iconMail = React.createElement(Mail, { size: sizeSm });
export const iconPhone = React.createElement(Phone, { size: sizeSm });
export const iconMapPin = React.createElement(MapPin, { size: sizeSm });
export const iconClock = React.createElement(Clock, { size: sizeSm });
export const iconArrow = React.createElement(ArrowRight, { size: 20 });
export const iconSearch = React.createElement(Search, { size: sizeXs });
