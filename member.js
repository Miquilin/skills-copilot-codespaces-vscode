function skillsMember(){
    return {
        restrict: 'E',
        templateUri: 'modules/skills/viewa/member.html',
        controller: 'SkillsMemberController',
        scope:{member: 'm'
    }
    };
}