"use strict"
/**
 * 此脚本用于在控制台中显示本项目相关信息
 * @author crrashh1542
 * @version 2.0.0
 */

import repoInfo from '../../package.json'
import buildInfo from '../../temp/buildInfo.json'
import moment from 'moment/moment'

// 获取项目和框架版本
const [repoVer, frameVer] = 
    [repoInfo.version, repoInfo.dependencies.vue.split('^')[1]]
// 获取构建信息
const [buildTime, buildHash, buildEnv, buildBranch] = 
    [buildInfo.time, buildInfo.hash, buildInfo.env, buildInfo.branch]
const shownTime = moment(buildTime).format('YYMMDD-HHMM')

export default function showInfo() {
    let styleName = `font-size: 14px;
                     color: #000; 
                     background-color: #8ad5b3; 
                     padding: 5px 9px;
                     border-radius: 3px 0 0 3px;
                     `
    let styleVer = `font-size: 14px; 
                    color: #fff; 
                    background-color: #607d8b; 
                    padding: 5px 9px;
                    border-radius: 0 3px 3px 0;
                    `
    let detailedVer = repoVer + '.' + buildBranch + '.' + shownTime

    console.log('%c%s%c%s', styleName, 'crash-homepage', styleVer, repoVer + '@' + buildHash)
    console.log('[buildInfo] Built at ' + buildEnv + ' mode on detailed version ' + detailedVer + ' with Vue ' + frameVer + '.')
}
