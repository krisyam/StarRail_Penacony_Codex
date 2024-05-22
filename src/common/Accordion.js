import { Icon } from '@rneui/base';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export function AccordionComponent({ title, children, style }) {
    const [toggle, setToggle] = useState(false);

    const handlePress = () => {
        setToggle(!toggle);
    };

    return (
        <TouchableWithoutFeedback
            onPress={handlePress}
        >
            <View style={style}>
                <View style={[styles.questionContainer, toggle && styles.active]}>
                    <View style={[styles.arrow, toggle && styles.active]}>
                        {toggle ? 
                            <Icon
                                name='chevron-down'
                                type='font-awesome'
                                color={'white'}
                                size={25}
                                iconStyle={{
                                    marginRight: 10,
                                    width: 40,
                                }}
                            />
                            : 
                            <Icon
                                name='chevron-right'
                                type='font-awesome'
                                color={'white'}
                                size={25}
                                iconStyle={{
                                    marginRight: 10,
                                    width: 40,
                                }}
                            />
                        }
                        
                    </View>
                    <Text>{title}</Text>
                </View>
                {toggle && <View style={styles.answerContainer}>{children}</View>}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = {
    questionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrow: {
        marginRight: 5,
    },
    active: {
        // backgroundColor: 'lightgray',
        transition: '1s ease',
    },
    answerContainer: {
        // display: 'flex',
    },
};